const serviceContainer = document.querySelector('#serviceContainer');
const serviceTemplate = document.querySelector('#serviceTemplate');

export const showServices = (services) => {
    if(Array.isArray(services) === false){
        throw new TypeError('This is not an array. Give a valid array !!');
    }

    services.forEach(curService => {
        const {id, fullName, shortName, phone, category, image} = curService;

        const serviceClone = document.importNode(serviceTemplate.content, true);

        serviceClone.querySelector('#cardValue').setAttribute('id', `card${id}`);

        serviceClone.querySelector('#cardImage').src = image;
        serviceClone.querySelector('#cardImage').alt = shortName + ' icon';
        serviceClone.querySelector('#cardHeading').textContent = fullName;
        serviceClone.querySelector('#cardSubheading').textContent = shortName;
        serviceClone.querySelector('#serviceNumber').textContent = phone;
        serviceClone.querySelector('#serviceCategory').textContent = category;


        serviceContainer.append(serviceClone);
    });
};