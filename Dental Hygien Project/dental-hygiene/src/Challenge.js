import { useState, useEffect, useRef } from 'react';

export const Challenge = () => {
  const [childPosition, setChildPosition] = useState({ 
    x: window.innerWidth / 2, 
    y: window.innerHeight / 2 
  });
  const [foods, setFoods] = useState([]);
  const [bgColor, setBgColor] = useState('bg-blue-100');
  const [score, setScore] = useState(0);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const gameAreaRef = useRef(null);
  const targetPos = useRef(childPosition);

  const foodTypes = [
    { type: 'healthy', emoji: '🍎', class: 'text-green-500', score: 10 },
    { type: 'unhealthy', emoji: '🍔', class: 'text-red-500', score: -5 },
  ];

  // توليد أطعمة
  useEffect(() => {
    const generateFood = () => {
      if (gameAreaRef.current) {
        const area = gameAreaRef.current.getBoundingClientRect();
        setFoods(prev => [
          ...prev,
          {
            id: Math.random(),
            x: Math.random() * (area.width - 50),
            y: Math.random() * (area.height - 50),
            ...foodTypes[Math.floor(Math.random() * foodTypes.length)],
          }
        ]);
      }
    };

    const interval = setInterval(generateFood, 1500);
    return () => clearInterval(interval);
  }, []);

  // حركة سلسة باتجاه الهدف
  useEffect(() => {
    const moveCharacter = () => {
      setChildPosition(prev => {
        const speed = 5;
        const dx = targetPos.current.x - prev.x;
        const dy = targetPos.current.y - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 5) return prev;
        
        return {
          x: prev.x + (dx / distance) * speed,
          y: prev.y + (dy / distance) * speed
        };
      });
    };

    const animationId = requestAnimationFrame(function update() {
      moveCharacter();
      requestAnimationFrame(update);
    });

    return () => cancelAnimationFrame(animationId);
  }, []);

  // تفاعلات اللمس/ماوس
  useEffect(() => {
    const handleMove = (clientX, clientY) => {
      if (gameAreaRef.current) {
        const area = gameAreaRef.current.getBoundingClientRect();
        targetPos.current = {
          x: clientX - area.left,
          y: clientY - area.top
        };
      }
    };

    const handleMouseMove = (e) => handleMove(e.clientX, e.clientY);
    const handleTouchMove = (e) => handleMove(e.touches[0].clientX, e.touches[0].clientY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // اكتشاف الاصطدام
  useEffect(() => {
    const checkCollision = () => {
      setFoods(prevFoods => {
        return prevFoods.filter(food => {
          const distance = Math.sqrt(
            Math.pow(childPosition.x - food.x, 2) + 
            Math.pow(childPosition.y - food.y, 2)
          );

          if (distance < 40) {
            setBgColor(food.type === 'healthy' ? 'bg-green-100' : 'bg-red-900');
            setScore(s => s + food.score);
            return false;
          }
          return true;
        });
      });
    };

    const collisionInterval = setInterval(checkCollision, 100);
    return () => clearInterval(collisionInterval);
  }, [childPosition]);

  return (
    <div className={`w-full h-screen ${bgColor} transition-colors duration-500 overflow-hidden`}>
      <div 
        ref={gameAreaRef} 
        className="relative w-full h-full"
        style={{ touchAction: 'none' }}
      >
        {/* الطفل */}
        <div
          className="absolute text-4xl transition-transform duration-100"
          style={{
            left: `${childPosition.x}px`,
            top: `${childPosition.y}px`,
            transform: `rotate(${
              Math.atan2(
                targetPos.current.y - childPosition.y, 
                targetPos.current.x - childPosition.x
              ) * (180 / Math.PI)
            }deg)`
          }}
        >
          🚶‍♂️
        </div>

        {/* الأطعمة */}
        {foods.map(food => (
          <div
            key={food.id}
            className={`absolute text-3xl ${food.class}`}
            style={{ left: `${food.x}px`, top: `${food.y}px` }}
          >
            {food.emoji}
          </div>
        ))}

        {/* النقاط */}
        <div className="absolute top-4 left-4 text-2xl font-bold bg-white p-2 rounded">
          النقاط: {score}
        </div>
      </div>
    </div>
  );
};