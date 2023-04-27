document.addEventListener("DOMContentLoaded", function() {
  const timelineItems = document.querySelectorAll(".timeline-item");
  for (let i = 1; i < timelineItems.length; i++) {
    const dateElement = timelineItems[i].querySelector(".date");
    dateElement.style.display = "none";
  }
});

function showEventDetails(item) {
  const eventDetails = item.querySelector(".event");
  const dateElement = item.querySelector(".date");
  const nextItem = item.nextElementSibling;

  const isFirstChild = !item.previousElementSibling;

  if (eventDetails.style.display === "block") {
    eventDetails.style.animation = "fadeOutTop 0.5s";
    setTimeout(() => {
      eventDetails.style.display = "none";
      eventDetails.style.animation = "";
      if (!isFirstChild) {
        dateElement.style.display = "none"; // Hide the date element when hiding the event details, except for the first item
      }
    }, 500);
  } else {
    eventDetails.style.display = "block";
    eventDetails.style.animation = "fadeIn 0.5s";

    if (nextItem) {
      const nextDateElement = nextItem.querySelector(".date");
      nextDateElement.style.display = "block";
    }
  }
}


