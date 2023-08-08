
  const video = document.getElementById('video-id');
  const playPauseIcon = document.getElementById('play-pause-icon');
  const hiddenPlayButton = document.getElementById('hidden-play-button');

 
  function togglePlayPause() {
    if (video.paused) {
      video.play();
      playPauseIcon.style.display = 'none';
      hiddenPlayButton.style.display = 'inline';
    } else {
      video.pause();
      playPauseIcon.style.display = 'inline';
      hiddenPlayButton.style.display = 'none';
    }
  }

  function hoverImagePause() {
    if (!video.paused) {
      hiddenPlayButton.style.display = 'inline';
    }
  }

  function leaveContainerVideo() {
    hiddenPlayButton.style.display = 'none';
  }

    function animateCount(element, targetValue, duration) {
        const startValue = parseInt(element.textContent);
        const increment = Math.ceil((targetValue - startValue) / duration);
        
        let currentValue = startValue;
        const interval = setInterval(() => {
            currentValue += increment;
            element.textContent = currentValue;
            
            if (currentValue >= targetValue) {
                clearInterval(interval);
                element.textContent = targetValue;
            }
        }, 1000);
    }
    




    const faqData = [
      {
          "question": "What is MNTN Performance TV advertising?",
          "answer": "this is the end hold your breath and networks and devices can I advertise using MNTN best of boy ahmed and where is hammad "
      },
      {
          "question": "What is MNTN Performance TV advertising?",
          "answer": "On what networks and devices can I advertise using MNTN Performance here networks and devices can I advertise using MNTN ."
      },
      {
          "question": "How does MNTN Performance TV differ from Traditional TV advertising?",
          "answer": "On what networks and devices can I advertise using MNTN Performance here."
      },
      {
          "question": "On what networks and devices can I advertise using MNTN Performance TV?",
          "answer": "On what networks and devices can I advertise using MNTN Performance here networks and devices can I advertise using MNTN networks and devices can I advertise using MNTN ."
      },
      {
          "question": "What does it take to get started with MNTN Performance TV Advertising?",
          "answer": "On what networks and devices can I advertise using MNTN Performance here."
      },
      {
          "question": "What does MNTN Performance TV compare to Paid Search Advertising?",
          "answer": "On what networks and devices can I advertise using MNTN Performance here."
      },
      {
          "question": "Can I use my existing video assets for MNTN Performance TV Advertising?",
          "answer": "On what networks and devices can I advertise using MNTN Performance here."
      },
      {
          "question": "What is OTT Advertising?",
          "answer": "On what networks and devices can I advertise using MNTN Performance here."
      },
      {
          "question": "I’d like to learn more about Connected TV advertising in general, can you tell me more?",
          "answer": "On what networks and devices can I advertise using MNTN Performance here."
      }
      // Add more FAQ items here...
  ];
  const faqList = document.querySelector(".faq-list");

  faqData.forEach((item, index) => {
      const faqItem = document.createElement("div");
      faqItem.classList.add("border-b", "border-[#DCE6FF]", "py-6", "my-8", "faq-item");
  
      const flexContainer = document.createElement("div");
      flexContainer.classList.add("flex", "justify-between", "items-center");
  
      const question = document.createElement("p");
      question.classList.add("text-xl", "font-medium", "leading-8");
      question.textContent = item.question;
  
      const plusIcon = document.createElement("img");
      plusIcon.src = "images/plus.png";
      plusIcon.alt = "Expand";
      plusIcon.classList.add("cursor-pointer", "plus-icon");
  
      const minusIcon = document.createElement("img");
      minusIcon.src = "images/minus.png";
      minusIcon.alt = "Collapse";
      minusIcon.classList.add("cursor-pointer", "minus-icon", "hidden");
  
      const answer = document.createElement("p");
      answer.classList.add("pp", "hidden");
      answer.textContent = item.answer;
  
      const toggleAnswer = () => {
          plusIcon.classList.toggle("hidden");
          minusIcon.classList.toggle("hidden");
          answer.classList.toggle("hidden");
  
          // Loop through all FAQ items to hide answers and icons except the clicked one
          faqList.querySelectorAll(".faq-item").forEach((otherFaqItem, i) => {
              if (i !== index) {
                  const otherAnswer = otherFaqItem.querySelector(".pp");
                  const otherPlusIcon = otherFaqItem.querySelector(".plus-icon");
                  const otherMinusIcon = otherFaqItem.querySelector(".minus-icon");
  
                  otherAnswer.classList.add("hidden");
                  otherPlusIcon.classList.remove("hidden");
                  otherMinusIcon.classList.add("hidden");
              }
          });
      };
  
      // Add click event to the FAQ item
      faqItem.addEventListener("click", toggleAnswer);
  
      faqItem.appendChild(flexContainer);
      flexContainer.appendChild(question);
      flexContainer.appendChild(plusIcon);
      flexContainer.appendChild(minusIcon);
      faqItem.appendChild(answer);
  
      faqList.appendChild(faqItem);
  });
  