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

  if (eventDetails.style.display === "block") {
    eventDetails.style.animation = "fadeOutTop 0.5s";
    setTimeout(() => {
      eventDetails.style.display = "none";
      eventDetails.style.animation = "";
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
