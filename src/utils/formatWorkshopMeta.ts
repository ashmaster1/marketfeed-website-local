import moment from 'moment';
import 'moment-timezone';

interface EventData {
  eventDate: string;
  eventDuration: number;
}

interface FormattedEventData {
  date: string;
  duration: string;
}
const formatDateAndDuration = (eventData: EventData): FormattedEventData => {
  // Parse the date and set it to the desired timezone
  const date = moment(eventData.eventDate).tz('Asia/Kolkata');

  // Format the date
  const formattedDate = date.format('dddd,MMMM D,YYYY');

  // Calculate the end time
  const endTime = moment(date).add(eventData.eventDuration, 'minutes');

  // Format the duration
  const formattedDuration = `${date.format('h:mm A')} - ${endTime.format(
    'h:mm A'
  )}`;

  return {
    date: formattedDate,
    duration: formattedDuration,
  };
};

export const formatWorkshopMeta = (workshopMeta: any) => {
  const formattedDateAndDuration = formatDateAndDuration({
    eventDate: workshopMeta.eventDate,
    eventDuration: workshopMeta.eventDuration,
  });

  return {
    ...formattedDateAndDuration,
    language: workshopMeta.language,
    workshopLink: workshopMeta.whatsappLink,
  };
};
