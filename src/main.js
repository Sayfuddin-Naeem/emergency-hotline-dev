import './style.css'
import { showServices } from './showServices';
import services from './api/service.json';
import { clearAllHistory } from './clearAllHistory';

const historyClearBtn = document.querySelector('#historyClearBtn');

historyClearBtn.addEventListener('click', clearAllHistory);

showServices(services);