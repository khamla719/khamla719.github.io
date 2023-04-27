function showEventDetails(item) {
  const eventDetails = item.querySelector('.event');
  if (eventDetails.style.display === 'block') {
    eventDetails.style.animation = 'fadeOutTop 0.5s';
    setTimeout(() => {
      eventDetails.style.display = 'none';
      eventDetails.style.animation = '';
    }, 500);
  } else {
    eventDetails.style.display = 'block';
    eventDetails.style.animation = 'fadeIn 0.5s';
  }
}

