import * as React from 'react';
import './style.css';
import { useState } from 'react';
import Card from './Card';
import Header from './Header';
import FilterContext from './FilterContext';


const Fruit = [
  {
    image: 'https://parfums-ugo.fr/wp-content/uploads/2021/05/Pomme-verte.jpg',
    name: 'Pomme',
    couleur: 'Vert',
  },

  {
    image: 'https://www.aprifel.com/wp-content/uploads/2019/02/banane.jpg',
    name: 'Banane',
    couleur: 'Jaune',
  },

  {
    image: 'https://www.aprifel.com/wp-content/uploads/2019/02/kiwi.jpg',
    name: 'Kiwi',
    couleur: 'Vert',
  },
];



export default function App() {
  const [read, setRead] = useState(Fruit);




const handleChange = (e) => {
  const search = e.target.value.toLowerCase();
  console.log(search);
  setRead(                                              //// FILTER
    Fruit.filter((fruit) =>
      fruit.name.toLowerCase().includes(search)
    )
  );
  if (search === "") {
    setRead(Fruit);
  }
};



////////////////////////////////////////// FILTRE 

const handleSelect = (e) => {
  if (e.target.value === "Vert") {  // SI COULEUR CHOISIS VERT 
    setRead(Fruit.filter((fruit) => fruit.couleur === "Vert")); // RENVOIE COULEURS VERTE 
  } else if (e.target.value === "Jaune") { // SI COULEURS JAUNE
    setRead(Fruit.filter((fruit) => fruit.couleur === "Jaune"));  // RENVOIS JAUNE
  } else {   
    setRead(Fruit); // SINON ON RENVOIS TOUT LE TABLEAU
  }
};


  return (
    <div>


<input type="text"   onChange={handleChange}></input>


<select
						className="select"
						name="home"
						onChange={handleSelect} // Rappele fonction
					> 
						<option value="All">Tout</option>
						<option value="Vert">Vert</option>
						<option value="Jaune">Jaune</option>
					</select>
    
      

    <div>
    <div className="cards">
						{read.map((data, id) => {
							return <Card key={id} data={data} />;
						})}
					</div>
    </div>
    </div>
  );

}
