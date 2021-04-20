const menu = () => {

    const menuItemsWrapper = document.createElement('div');
    menuItemsWrapper.setAttribute('id', 'menuItemsWrapper');
    buttonContent.appendChild(menuItemsWrapper);

    const menuItem1Wrapper = document.createElement('div');
    menuItem1Wrapper.setAttribute('id', 'menuItem1Wrapper');
    menuItemsWrapper.appendChild(menuItem1Wrapper);

    const menuItem2Wrapper = document.createElement('div');
    menuItem2Wrapper.setAttribute('id', 'menuItem2Wrapper');
    menuItemsWrapper.appendChild(menuItem2Wrapper);

    const menuItem1Image = document.createElement('div');
    menuItem1Image.setAttribute('id', 'menuItem1Image');
    menuItem1Wrapper.appendChild(menuItem1Image);

    const menuText1 = document.createElement('div');
    menuText1.textContent = 'Brain Juice';
    menuText1.setAttribute('id', 'menuText1');
    menuItem1Wrapper.appendChild(menuText1);

    const menuItem2Image = document.createElement('div');
    menuItem2Image.setAttribute('id', 'menuItem2Image');
    menuItem2Wrapper.appendChild(menuItem2Image);

    const menuText2 = document.createElement('div');
    menuText2.textContent = 'Monkey brain';
    menuText2.setAttribute('id', 'menuText2');
    menuItem2Wrapper.appendChild(menuText2);

};
    
export { menu }