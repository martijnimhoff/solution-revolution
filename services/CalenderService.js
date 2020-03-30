import superagent from 'superagent'

export default {
  async getPublicEvents() {
    const calendarId = 'qadvau05tug8uqkumld2v5lijo@group.calendar.google.com'
    const apiKey =
      process.env.GOOGLE_CALENDAR_API_KEY ||
      'AIzaSyBF4n4PwhfLbZXyxC7v51FkCMvSgeqB2kw'

    const { body } = await superagent.get(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`
    )

    return body.items
  }
}
