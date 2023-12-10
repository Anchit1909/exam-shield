import React from "react";
import Container from "./Container";
import Title from "./Title";
import ReviewGrid from "./ReviewGrid";

const Reviews = () => {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <Title
          title="Testimonials"
          id="reviews-title"
          className="text-4xl font-medium tracking-tight text-gray-900 sm:text-center"
        />
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Thousands of instructors have conducted their exams fairly on
          ExamShield.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  );
};

export default Reviews;
