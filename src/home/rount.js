import articles1 from '../articles/articles1.html'
import articles2 from '../articles/articles2.html'
import articles3 from '../articles/articles3.html'
import articles4 from '../articles/articles4.html'
import articles5 from '../articles/articles5.html'
function HTMLparse(str) {
    var span = document.createElement('span');
    span.innerHTML = str;
    return span.querySelector('template').innerHTML;
}
export default [
    {
        id: 1,
        // title: '如何看待知乎上的男拳',
        article: HTMLparse(articles1)
    },
    {
        id: 2,
        // title: '如何看待知乎上的男拳',
        article: HTMLparse(articles2)
        },
    {
        id: 3,
        // title: '如何看待知乎上的男拳',
        article: HTMLparse(articles3)
    },
    {
        id: 4,
        // title: '如何看待知乎上的男拳',
        article: HTMLparse(articles4)
        },
    {
        id: 5,
        // title: '如何看待知乎上的男拳',
        article: HTMLparse(articles5)
    },
]