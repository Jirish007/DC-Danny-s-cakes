var cakesList = [{
    id: "1",
    image:"images/cake 1.jpg "
    },{
    id:'2',
    image:"images/cake 2.jpg "
    },{
    id:"3",
    image:"images/cake 3.jpg "
    },{
    id:"4",
    image:"images/cake 4.jpg "
    },{
    id:"5",
    image:"images/cake 5.jpg "
    },{
    id:"6",
    image:"images/cake 6.jpg "
    },{
    id:"7",
    image:"images/cake 7.jpg "
    }]

test("verify the list",()=>{
    expect(cakesList).toEqual( [{
        id: "1",
        image:"images/cake 1.jpg "
        },{
        id:'2',
        image:"images/cake 2.jpg "
        },{
        id:"3",
        image:"images/cake 3.jpg "
        },{
        id:"4",
        image:"images/cake 4.jpg "
        },{
        id:"5",
        image:"images/cake 5.jpg "
        },{
        id:"6",
        image:"images/cake 6.jpg "
        },{
        id:"7",
        image:"images/cake 7.jpg "
        }])
})