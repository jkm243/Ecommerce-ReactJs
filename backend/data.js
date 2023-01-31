import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Jack',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    products:[
        {
            // _id:'1',
            name:'Air Max 2015 Blue',
            slug:'air-max-2015-blue',
            category:'shoes',
            image:'assets/images/slider3.png',
            description:'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.',
            price:'199',
            oldPrice:'299',
            brand:'Nike',
            countInStock:'10',
            rating:'4.5',
            numReviews: '200',
            vitrine:true
        },
        {
            // _id: '2',
            name:'Nike Air Force Vintage',
            slug:'nike-air-force-vintage',
            category:'shoes',
            image:'assets/images/slider1.png',
            description:'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.',
            price:'399',
            oldPrice:'499',
            brand:'Nike',
            countInStock:'10',
            rating:'4.5'
            ,
            numReviews: '200',
            vitrine: true
        },
        {
            // _id: '3',
            name:'Air Force One Red',
            slug:'air-force-one-red',
            category:'shoes',
            image:'assets/images/slider2.png',
            description:'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.',
            price:'199',
            oldPrice:'299',
            brand:'Nike',
            countInStock:'0',
            rating:'4.5'
            ,
            numReviews: '200',
            vitrine: true
        },
        {
            // _id: '4',
            name:'Nike Phylon 2021',
            slug:'nike-phylon',
            category:'shoes',
            image:'assets/images/phylon.png',
            description:'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.',
            price:'199',
            oldPrice:'299',
            brand:'Nike',
            countInStock:'10',
            rating:'4.5'
            ,
            numReviews: '200',
            vitrine: false
        },
        {
            // _id: '5',
            name:'Air Max 2015',
            slug:'air-max-2015',
            category:'shoes',
            image:'assets/images/p1.png',
            description:'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.',
            price:'199',
            oldPrice:'299',
            brand:'Nike',
            countInStock:'10',
            rating:'4.5'
            ,
            numReviews: '200',
            vitrine: false
        },
        {
            // _id: '6',
            name:'Air Max King',
            slug:'air-max-king',
            category:'shoes',
            image:'assets/images/p2.png',
            description:'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.',
            price:'199',
            oldPrice:'299',
            brand:'Nike',
            countInStock:'10',
            rating:'4.5'
            ,
            numReviews: '200',
            vitrine: false
        },
        {
            // _id: '7',
            name:'Air Max Jordan',
            slug:'air-max-jordan',
            category:'shoes',
            image:'assets/images/amax2017.png',
            description:'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.',
            price:'199',
            oldPrice:'299',
            brand:'Nike',
            countInStock:'10',
            rating:'4.5'
            ,
            numReviews: '200',
            vitrine: false
        },
        {
            // _id: '8',
            name:'Nike Red Sneakers',
            slug:'nike-air-sneaker',
            category:'shoes',
            image:'assets/images/nike-red.png',
            description:'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.',
            price:'199',
            oldPrice:'299',
            brand:'Nike',
            countInStock:'10',
            rating:'3'
            ,
            numReviews: '100',
            vitrine: false
        }
    ],
}
export default data;