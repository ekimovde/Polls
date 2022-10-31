import Vue from 'vue';
import Vuelidate from 'vuelidate';
import { Component } from 'vue-property-decorator';

Vue.use(Vuelidate);
Component.registerHooks(['validations']);
