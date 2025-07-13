import React, { useState } from 'react';


const CalorieTracker = () => {
  const HF_API_KEY = process.env.REACT_APP_HF_KEY;
  const [image, setImage] = useState(null);
  const [calories, setCalories] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
    setCalories(null);
  };

  const handleSubmit = async () => {
    if (!image) return;
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', image);

      const response = await fetch('https://api-inference.huggingface.co/spaces/yuvaranianandhan24/food_calorie_calculator', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
        },
        body: formData,
      });

      const result = await response.json();
      setCalories(result.calories || 'Could not estimate');
    } catch (error) {
      console.error('Error fetching calorie data:', error);
      setCalories('Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4 py-10">
      <h1 className="text-3xl lg:text-5xl font-bold text-blue-700 mb-6">Calorie Tracker</h1>
      <p className="text-gray-600 mb-8 text-center max-w-xl">
        Upload an image of your food and get an approximate calorie estimate powered by AI.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg flex flex-col items-center gap-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
        />
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded Preview"
            className="w-64 h-64 object-cover rounded-lg border"
          />
        )}
        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Estimate Calories
        </button>
        {loading && <p className="text-blue-500">Estimating...</p>}
        {calories && (
          <p className="text-lg font-bold text-green-600">
            Estimated Calories: {calories}
          </p>
        )}
      </div>
    </div>
  );
};

export default CalorieTracker;
