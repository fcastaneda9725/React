import React from 'react';
import Media from './media';
import Play from '../../icons/components/play';
import FullScreen from '../../icons/components/fullScreen';
import Pause from '../../icons/components/pause';
import Volume from '../../icons/components/volume';

// class Playlist extends Component {
//   render() {
//     const playlist = this.props.data.categories[0].playlist
//     console.log(this.props.data);
//     return(
//       <div>
//         {
//           playlist.map((item)=>{
//             return <Media {...item} key={item.id}/>
//           })
//         }
//       </div>
//     )
//   }
// }
function Playlist (props) {

    const playlist = props.data.categories[0].playlist
    console.log(props.data);
    return(
      <div className="Playlist">
        <Play size={50} color="red"/>
        <FullScreen size={50} color="blue" />
        <Pause size={50} color="purple"/>
        <Volume size={50} color="gold"/>
        {
          playlist.map((item)=>{
            return <Media {...item} key={item.id}/>
          })
        }
      </div>
    )

}

export default Playlist;
