import customer1 from "../assets/customer1.jpeg"
import customer2 from "../assets/customer2.svg"
import ReviewCard from "./ReviewCard"

const CustomerReviews = () => {
   const reviews = [
      {
          imgURL: customer1,
          customerName: 'Morich Brown',
          rating: 4.5,
          feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
      },
      {
          imgURL: customer2,
          customerName: 'Lota Mongeskar',
          rating: 4.5,
          feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
      }
  ];
  return (
    <section className="max-container">
      <h3 className="font-palanquin font-bold text-4xl text-center">What Our <span className="text-red-400">Customers</span> Say?</h3>
      <p className="text-gray-500 flex m-auto text-center text-xl font-palanquin mt-4 max-w-lg">Hear genuine stories from our satisfied customers about their exceptional experience with us.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review)=>(
          <ReviewCard  key={review.customerName}
          imgURL= {review.imgURL}
          customerName= {review.customerName}
          rating= {review.rating}
          feedback= {review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews