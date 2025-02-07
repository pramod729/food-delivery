import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Star, Utensils } from "lucide-react";
import Image from "next/image";

const featuredRestaurants = [
  {
    id: 1,
    name: "The Italian Kitchen",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=60",
    rating: 4.8,
    deliveryTime: "25-35",
    cuisine: "Italian",
  },
  {
    id: 2,
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60",
    rating: 4.9,
    deliveryTime: "30-40",
    cuisine: "Japanese",
  },
  {
    id: 3,
    name: "Burger House",
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=800&auto=format&fit=crop&q=60",
    rating: 4.7,
    deliveryTime: "20-30",
    cuisine: "American",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&auto=format&fit=crop&q=60"
          alt="Hero background"
          fill
          className="object-cover brightness-50"
        />
        <div className="container relative flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-6 text-5xl font-bold">Delicious Food Delivered to Your Door</h1>
          <p className="mb-8 text-xl">Order from your favorite restaurants with just a few clicks</p>
          <Button size="lg" className="text-lg">
            Order Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="container py-16">
        <h2 className="mb-8 text-3xl font-bold">Featured Restaurants</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredRestaurants.map((restaurant) => (
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
                <Button className="mt-4 w-full">View Menu</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}