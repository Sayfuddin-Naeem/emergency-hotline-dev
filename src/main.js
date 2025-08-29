import './style.css'
import { showServices } from './showServices';
import services from './api/service.json';
import { clearAllHistory } from './clearAllHistory';
import { showCallHistory } from './showCallHistory';
import { getHistoryFromLS } from './getHistoryFromLS';

const historyClearBtn = document.querySelector('#historyClearBtn');

historyClearBtn.addEventListener('click', clearAllHistory);

const allHistoryLS = getHistoryFromLS();

showServices(services);
showCallHistory(allHistoryLS);