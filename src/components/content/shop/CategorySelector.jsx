// CategorySelector.js
import React from 'react';

export default function CategorySelector({ onSelectCategory }) {
  const handleCategoryChange = (event) => {
    // Llama a la función de selección de categoría con el valor del botón de radio seleccionado

    onSelectCategory(event.target.value)
    
  };

  return (
    <div className="wrapper">
      <div className="category-option">
        <input
          value="1"
          name="btn"
          type="radio"
          className="category-input"
          onChange={handleCategoryChange} // Llama a la función al cambiar
        />
        <div className="category-btn">
          <span className="category-span">Ropa Deportiva</span>
        </div>
      </div>
      <div className="category-option">
        <input
          value="2"
          name="btn"
          type="radio"
          className="category-input"
          onChange={handleCategoryChange}
        />
        <div className="category-btn">
          <span className="category-span">Accesorios</span>
        </div>
      </div>
      <div className="category-option">
        <input
          value="3"
          name="btn"
          type="radio"
          className="category-input"
          onChange={handleCategoryChange}
        />
        <div className="category-btn">
          <span className="category-span">Suplementos</span>
        </div>
      </div>
      <div className="category-option">
        <input
          value="4"
          name="btn"
          type="radio"
          className="category-input"
          onChange={handleCategoryChange}
        />
        <div className="category-btn">
          <span className="category-span">Higiene</span>
        </div>
      </div>
      <div className="category-option">
        <input
          value="5"
          name="btn"
          type="radio"
          className="category-input"
          onChange={handleCategoryChange}
        />
        <div className="category-btn">
          <span className="category-span">Tecnología</span>
        </div>
      </div>
    </div>
  );
}
