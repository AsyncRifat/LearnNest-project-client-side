const FaqSection = () => {
  return (
    <div className="mx-20 mb-10 mt-20">
      <div className="text-center">
        <h1 className="mb-5 md:mb-10">
          <span className="font-extrabold text-green-700 text-3xl">| </span>
          <span className="font-medium font-quicksand text-2xl">
            Frequently Asked Questions (FAQ)
          </span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm font-thin">
          Get quick answers to the most common questions about our courses,
          enrollment process, certification, payment methods, and support.{' '}
          <br />
          Whether you&apos;re a new learner or returning user, we&apos;ve got
          you covered.
        </p>
      </div>
      <div className="px-10 space-y-4 mt-10">
        <div className="collapse collapse-arrow bg-violet-50 dark:bg-gray-800 border border-base-300 rounded-2xl">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            How can I enroll in a course?
          </div>
          <div className="collapse-content text-sm">
            To enroll in a course, simply log into your account, browse the
            “Courses” section, choose your desired course, and click on the
            “Enroll Now” button.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-violet-50 dark:bg-gray-800 border border-base-300 rounded-2xl">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Are the courses fully online?
          </div>
          <div className="collapse-content text-sm">
            Yes, all our courses are 100% online, allowing you to learn anytime,
            from anywhere at your convenience.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-violet-50 dark:bg-gray-800 border border-base-300 rounded-2xl">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Will I receive a certificate after completing a course?
          </div>
          <div className="collapse-content text-sm">
            Absolutely! Upon successfully completing any course, you’ll receive
            a downloadable digital certificate that verifies your achievement.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-violet-50 dark:bg-gray-800 border border-base-300 rounded-2xl">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            What payment methods do you accept?
          </div>
          <div className="collapse-content text-sm">
            We support payments through mobile banking, debit/credit cards
            (Visa, MasterCard,American Express), and international options like
            PayPal.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-violet-50 dark:bg-gray-800 border border-base-300 rounded-2xl">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Can I get a refund if I can&apos;t complete the course?
          </div>
          <div className="collapse-content text-sm">
            Yes, we offer a refund within a specified period (typically within 7
            days of purchase), as per our refund policy.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
