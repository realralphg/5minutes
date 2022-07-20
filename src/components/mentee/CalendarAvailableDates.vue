<template>
  <div class="calendar q-ma-sm">
    <div class="calendar-days row justify-between q-py-md q-px-lg">
      <div v-for="day in calendar.days" :key="day">{{day}}</div>
    </div>
    <div class="calendar-dates row justify-between">
      <div class="calendar-date text-center column justify-center " v-for="n in calendar.monthsMaxDays[currentMonth].days" :key="n">
        {{n}}
      </div>
    </div>
  </div>
</template>
<script>
import calendar from "src/constants/calendarData";

const date = new Date();
export default {
  name: "CalendarAvailabilityDatesComponent",
  data(){
    return {
      calendar,
      currentMonth: date.getMonth()
    }
  }

}
</script>
