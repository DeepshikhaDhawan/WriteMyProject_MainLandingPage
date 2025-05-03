
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  project: string;
  date: string;
}


const reviews: Review[] = [
  {
    id: 1,
    name: "Tushar Sonkar",
    avatar: "https://assets.leetcode.com/users/Tushar_sonkar7/avatar_1732420157.png",
    rating: 5,
    text: "WriteMyProject helped me with my college engineering project and assignment files. The writer understood my requirements perfectly and delivered excellent work.",
    project: "Computer Science Engineer",
    date: "April 15, 2025"
  },
  {
    id: 2,
    name: "Krishna",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdN55e-DbwOlEGXBuZnIaS_Iw-Ba0EtOMQHQ&s",
    rating: 5,
    text: "I was struggling with my BCA business plan until I found WriteMyProject. Their expertise and attention to detail is very good.",
    project: "Student",
    date: "May 3, 2025"
  },
  {
    id: 3,
    name: "David Wilson",
    avatar: "https://i.pravatar.cc/100?img=6",
    rating: 4,
    text: "Great service for my research paper. The writer was knowledgeable and responsive throughout the process.",
    project: "Psychology Research",
    date: "February 22, 2023"
  },
  {
    id: 4,
    name: "Emma Roberts",
    avatar: "https://i.pravatar.cc/100?img=8",
    rating: 5,
    text: "I needed help with a complex coding project. The writer not only completed it perfectly but also explained the code which helped me understand it better.",
    project: "Computer Science",
    date: "May 7, 2023"
  },
  {
    id: 5,
    name: "Michael Chen",
    avatar: "https://i.pravatar.cc/100?img=10",
    rating: 5,
    text: "My literature review was professionally written and thoroughly researched. I'm extremely satisfied with the quality.",
    project: "English Literature",
    date: "April 19, 2023"
  },
  {
    id: 6,
    name: "Sarah Johnson",
    avatar: "https://i.pravatar.cc/100?img=12",
    rating: 5,
    text: "The writer assigned to my nursing case study had extensive knowledge in healthcare. The paper exceeded my expectations.",
    project: "Nursing",
    date: "March 30, 2023"
  }
];

const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="section bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold text-center mb-3">What Our Customers Say</h2>
        <p className="section-subtitle text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Read testimonials from students and professionals who have trusted us with their academic projects
        </p>

        <div className="relative w-full max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="pl-4 sm:basis-1/2 md:basis-1/3">
                  <div className="h-auto bg-white rounded-lg shadow-lg p-5 border border-gray-300 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center mb-3">
                      <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <p className="text-sm text-gray-500">{review.project}</p>
                      </div>
                    </div>

                    <div className="mb-2 flex">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>

                    <p className="text-gray-700 mb-2">"{review.text}"</p>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="hidden md:block">
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
