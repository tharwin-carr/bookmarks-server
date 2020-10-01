const { v4: uuid }= require('uuid')

const bookmarks= [
{
    id: uuid(),
    title: 'Google',
    url: 'https://www.Google.com',
    description: 'Where we find everything',
    rating: 5
},
{
    id: uuid(),
    title: 'Facebook',
    url: 'https://www.facebook.com',
    description: 'Connect with people',
    rating: 4
},
{
    id: uuid(),
    title: 'YouTube',
    url: 'https://www.youtube.com',
    description: 'More than enough videos',
    rating: 3
}
]

module.exports= { bookmarks }