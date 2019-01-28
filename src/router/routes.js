import Loadable from 'react-loadable'
import Loading from '@components/Loading'
import FindMusic from '@views/FindMusic'
import Video from '@views/Video'
import Top from '@views/Top'

const AsyncPlaylist = Loadable({
  loader: () => import(/* webpackChunkName: 'Playlist' */ '../views/Playlist'),
  loading: Loading,
})

const AsyncArtist = Loadable({
  loader: () => import(/* webpackChunkName: 'Artist' */ '../views/Artist'),
  loading: Loading,
})

const AsyncSong = Loadable({
  loader: () => import(/* webpackChunkName: 'Song' */ '../views/Song'),
  loading: Loading,
})

const routesConfig = [
  {
    path: '/explore',
    component: FindMusic,
  },
  {
    path: '/playlist/:id',
    component: AsyncPlaylist,
  },
  {
    path: '/artist/:id',
    component: AsyncArtist,
  },
  {
    path: '/song/:id',
    component: AsyncSong,
  },
  {
    path: '/top',
    component: Top,
  },
  {
    path: '/video',
    component: Video,
  },
]

export default routesConfig
