import $ from "jquery";

let multiItemSlider = (function () {
    return function () {
        let
            _mainElement = document.querySelector('.banner__container'),
            _sliderWrapper = _mainElement.querySelector('.banner__list'),
            _sliderItems = _mainElement.querySelectorAll('.banner__item'),
            _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width),
            _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),
            _positionLeftItem = 0,
            _positionLeftItemControls = 0,
            _transform = 0,
            _step = _itemWidth / _wrapperWidth * 100,
            _items = [],
            controlItems =  _mainElement.querySelectorAll('.banner__item-control');


        _sliderItems.forEach(function (item, index) {
            _items.push({ item: item, position: index, transform: 0 });
        });

        let position = {
            getItemMin: function () {
                let indexItem = 0;
                _items.forEach(function (item, index) {
                    if (item.position < _items[indexItem].position) {
                        indexItem = index;
                    }
                });
                return indexItem;
            },
            getItemMax: function () {
                let indexItem = 0;
                _items.forEach(function (item, index) {
                    if (item.position > _items[indexItem].position) {
                        indexItem = index;
                    }
                });
                return indexItem;
            },
            getMin: function () {
                return _items[position.getItemMin()].position;
            },
            getMax: function () {
                return _items[position.getItemMax()].position;
            }
        }

        let _transformItem = function () {
            let nextItem;
            _positionLeftItem++;
            _positionLeftItemControls++;

            if(_positionLeftItemControls > 2){
                _positionLeftItemControls = 0;
                controlItems[2].className = 'banner__item-control';
            } else if(_positionLeftItemControls !== 0) {
                controlItems[_positionLeftItemControls-1].className = 'banner__item-control';
            }

            controlItems[_positionLeftItemControls].className = 'banner__item-control banner__item-control--active';
            
            if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
                nextItem = position.getItemMin();
                _items[nextItem].position = position.getMax() + 1;
                _items[nextItem].transform += _items.length * 100;
                _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
            }
            _transform -= _step;
            
            _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }
        
        let timerId = setInterval(() => _transformItem('right'), 6000);        
    }
}());

let slider = multiItemSlider('.slider');


$('.menu__container').find('a').click(function(event) {
    if($(this).attr("href")=="#"){
        event.preventDefault();
    }
});

$('#menu__cancel').click(function(event) {
    $("#hover-menu").toggleClass('hover-menu');
    $(this).toggleClass('menu__cancel--hidden');
});

$("#menu__container--little").click(function() {
    $("#hover-menu").toggleClass('hover-menu');
    $("#menu__cancel").toggleClass('menu__cancel--hidden');
});
