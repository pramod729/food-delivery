import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Search, Star, Utensils } from "lucide-react";
import Image from "next/image";

const restaurants = [
  {
    id: 1,
    name: "The Italian Kitchen",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=60",
    rating: 4.8,
    deliveryTime: "25-35",
    cuisine: "Italian",
    minOrder: 15,
  },
  {
    id: 2,
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60",
    rating: 4.9,
    deliveryTime: "30-40",
    cuisine: "Japanese",
    minOrder: 20,
  },
  {
    id: 3,
    name: "Burger House",
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=800&auto=format&fit=crop&q=60",
    rating: 4.7,
    deliveryTime: "20-30",
    cuisine: "American",
    minOrder: 10,
  },
  {
    id: 4,
    name: "Spice Garden",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=60",
    rating: 4.6,
    deliveryTime: "35-45",
    cuisine: "Indian",
    minOrder: 18,
  },
  {
    id: 5,
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop&q=60",
    rating: 4.5,
    deliveryTime: "25-35",
    cuisine: "Mexican",
    minOrder: 12,
  },
  {
    id: 6,
    name: "Noodle House",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=60",
    rating: 4.7,
    deliveryTime: "30-40",
    cuisine: "Chinese",
    minOrder: 15,
  },
];

export default function RestaurantsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="container py-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-bold">Restaurants</h1>
          
          <div className="flex flex-wrap gap-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Cuisine Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cuisines</SelectItem>
                <SelectItem value="italian">Italian</SelectItem>
                <SelectItem value="japanese">Japanese</SelectItem>
                <SelectItem value="american">American</SelectItem>
                <SelectItem value="indian">Indian</SelectItem>
                <SelectItem value="mexican">Mexican</SelectItem>
                <SelectItem value="chinese">Chinese</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="rating">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="delivery">Delivery Time</SelectItem>
                <SelectItem value="min-order">Minimum Order</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Star className="mr-1 h-4 w-4 text-yellow-400" />
                    {restaurant.rating}
                  </span>
                  <span className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {restaurant.deliveryTime} min
                  </span>
                  <span className="flex items-center">
                    <Utensils className="mr-1 h-4 w-4" />
                    {restaurant.cuisine}
                  </span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Min. order: ${restaurant.minOrder}
                </div>
                <Button className="mt-4 w-full">View Menu</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}