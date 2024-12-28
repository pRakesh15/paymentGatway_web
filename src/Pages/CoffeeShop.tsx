import { CoffeeCard } from "../Components/CoffeeCard";

type Coffee = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  
  const coffees: Coffee[] = [
    {
      id: 1,
      name: "Espresso",
      description: "Strong and concentrated coffee shot",
      price: 356.00,
      image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      id: 2,
      name: "Cappuccino",
      description: "Cappuccino with steamed milk foam",
      price: 250.00,
      image: "https://cdn.pixabay.com/photo/2024/10/06/16/22/coffee-9100589_640.jpg"
    },
    {
      id: 3,
      name: "Latte",
      description: "Latte with steamed milk",
      price: 650.00,
      image: "https://media.istockphoto.com/id/505168330/photo/cup-of-cafe-latte-with-coffee-beans-and-cinnamon-sticks.jpg?s=612x612&w=0&k=20&c=h7v8kAfWOpRapv6hrDwmmB54DqrGQWxlhP_mTeqTQPA="
    },
    {
      id: 4,
      name: "Americano",
      description: "Americano diluted with hot water",
      price: 475.00,
      image: "https://images.unsplash.com/photo-1669872484166-e11b9638b50e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYW5vJTIwY29mZmVlfGVufDB8fDB8fHww"
    },
    {
      id: 5,
      name: "Mocha",
      description: "Mocha with chocolate and steamed milk",
      price: 284.00,
      image: "https://media.istockphoto.com/id/157675911/photo/cappuccino-topped-with-swirls-of-chocolate-sauce.jpg?s=612x612&w=0&k=20&c=606NMYMjVnTmpSnJI537_IjW3lqfNJaH7Lc9Qg0BXPU="
    },
    {
      id: 6,
      name: "Macchiato",
      description: "Macchiato with a small amount of foamed milk",
      price: 228.00,
      image: "https://131580232.cdn6.editmysite.com/uploads/1/3/1/5/131580232/s207941949625139597_p5_i1_w2048.jpeg"
    },
    {
      id: 7,
      name: "Chai",
      description: "A chaddack  milk chai ",
      price: 10.00,
      image: "https://www.shutterstock.com/image-photo/enjoying-chai-pakoda-600nw-2479853543.jpg"
    }
  ];

  export default function CoffeeShop() {
    return (
      <div className="min-h-screen bg-zinc-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          <h1 className="text-3xl font-extrabold text-center text-gray-200 mb-10"> Coffee Selection</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coffees.map((coffee) => (
              <CoffeeCard key={coffee.id} {...coffee} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  