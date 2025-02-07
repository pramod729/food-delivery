import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Tag, Utensils } from "lucide-react";
import Image from "next/image";

const offers = [
  {
    id: 1,
    title: "50% OFF on First Order",
    description: "Get 50% off on your first order above $30",
    code: "WELCOME50",
    validUntil: "2024-05-01",
    minOrder: 30,
    maxDiscount: 15,
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Free Delivery",
    description: "Free delivery on orders above $25",
    code: "FREEDEL",
    validUntil: "2024-04-30",
    minOrder: 25,
    maxDiscount: 5,
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "20% OFF on Japanese",
    description: "Get 20% off on all Japanese restaurants",
    code: "JAPAN20",
    validUntil: "2024-04-15",
    minOrder: 40,
    maxDiscount: 20,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60",
  },
];

export default function OffersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="container py-8">
        <h1 className="mb-8 text-3xl font-bold">Special Offers</h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{offer.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-muted-foreground">{offer.description}</p>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span>Code: <strong>{offer.code}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Valid until: {new Date(offer.validUntil).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Utensils className="h-4 w-4" />
                    <span>Min. order: ${offer.minOrder}</span>
                  </div>
                </div>
                <Button className="mt-4 w-full">Apply Offer</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}