<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
})
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* font-family: "Roboto", sans-serif !important; */
}

button {
  cursor: pointer;
}

.q-tab__label {
  font-size: 18px !important;
  line-height: 1.715em;
  font-weight: 500;
}

body {
  /* overflow-x: hidden; */
  font-size: 18px;
  font-family: "Roboto", sans-serif !important;
}

img {
  width: 100%;
  text-align: center;
  object-fit: contain;
}

a {
  text-decoration: none;
}

.flex {
  display: flex;
  align-items: center;
}

.about__img {
  flex: 1;
}
.about__data {
  flex: 1;
}
@media (max-width: 500px) {
  .flex {
    flex-direction: column !important;
    flex-direction: column-reverse !important;
  }
}

li {
  list-style: none;
}
.container {
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
}

.q-field__label {
  left: 0;
  top: 18px;
  max-width: 100%;
  color: #fff !important;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.00937em;
  text-decoration: inherit;
  text-transform: inherit;
  transform-origin: left top;
  transition: transform 0.36s cubic-bezier(0.4, 0, 0.2, 1),
    max-width 0.324s cubic-bezier(0.4, 0, 0.2, 1);
}

.q-field__bottom {
  font-size: 12px;
  min-height: 2px;
  line-height: 1;
  color: #fff !important;
  background-color: white;
  padding: 2px 12px 0;
}
.log .q-tab__indicator {
  display: none !important;
}

.q-stepper__header--contracted .q-stepper__tab:not(:last-child) .q-stepper__dot:after {
    display: block !important;
    height: 1px;
    background: #52d972;
    /* width: 100%; */
}

.q-stepper--horizontal .q-stepper__dot:before {
    content: '';
    right: 100%;
    margin-right: 8px;
}

.q-stepper--horizontal .q-stepper__line:before, .q-stepper--horizontal .q-stepper__line:after {
    position: absolute;
    top: 50%;
    height: 1px;
    width: 100vw;
    /* background: rgba(0, 0, 0, 0.12); */
    background: #52d972;

}

.addborder .q-item{
    border: 1px solid #52d972 !important;
    margin: .65rem 0;
    border-radius: 8px;
}

.dots .q-stepper__dot{
  width: 30px;
  height: 30px;
}
.acc{
background-color: #e5e5e5;
}
.acc .q-item__label{
color: #979797;
}
.q-item__label{
color: #52d972;
/* font-size: 12px; */
}

.q-item__section .q-icon{
  color: #52d972;

}
.q-list--bordered {
    border: none;
}

.q-stepper__header--border {
    border-bottom: none;
    margin: 3rem 0;
}

.q-expansion-item--standard.q-expansion-item--expanded > div > .q-expansion-item__border {
    opacity: 0;
}
.q-item__section .q-expansion-item__toggle-icon{
  background: rgba(82, 217, 114, 0.21);
  border-radius: 4px;
}

.q-stepper {
    box-shadow:none;
}
.q-stepper__dot{
  background: none;
}
.q-stepper__dot .q-icon{
  font-size: 2rem !important;
  /* background: #06B22F; */
  background: rgba(82, 217, 114, 0.2);
  border-radius: 100px;
  color: #52d972;

  padding: .55rem;
}
.q-stepper__header--standard-labels .q-stepper__tab:first-child {
    /* background-color: red; */
    justify-content: center;
    padding-right: 2rem;
}
.q-stepper__header--standard-labels .q-stepper__tab:last-child {
    /* background-color: red; */
    justify-content: center;
    padding-left: 2rem;
}
.q-stepper__nav {
    padding-top: 0px;
}
.q-stepper--horizontal > .q-stepper__nav {
    padding: 0;
}

.q-stepper__tab.q-stepper__tab--active .q-stepper__dot .q-icon{
  background: #52D972;
  color: #fff;

}
.curr .q-option-group--inline > div {
    border: none;
    width: fit-content;
}
.q-option-group--inline > div {
    width: 150px;
    transition: all .5s ease-in-out;
}
.q-option-group--inline > div:hover {
    border: 1px solid #52D972;
}

@media(max-width: 400px){
  .dots .q-stepper__dot{
  width: 40px;
  height: 30px;
}
.q-stepper__dot .q-icon{
  font-size: 1rem !important;
  background: #06B22F;
  padding: .55rem;
}
.q-item__section--avatar {
    /* color: inherit; */
    min-width: 0px;
}
.q-item__label{
color: #52d972;
font-size: 12px;
}
}
.q-page-container {
  padding: 0 !important;
}

input:focus {
  outline: none;
}
/* button {
  filter: blur(1px);
} */


.q-btn:before {
    box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
    box-shadow: none;
}
</style>