import Taro, { Component } from "@tarojs/taro";
import { View, Video, Image, Button } from "@tarojs/components";
import like from "../../assets/images/like.png";
import tread from "../../assets/images/tread.png";
interface PropsState {
  objAry: Array<any>;
}

export default class List extends Component<PropsState> {
  static options = {
    addGlobalClass: true
  };

  render() {
    const { objAry } = this.props;
    return (
      <View className="container">
        {objAry.map(item => (
          <View key={item.id} className="list_item">
            <View className="author flex">
              <Image className="avatar" src={item.user.avatar} />
              <View className="nickName">
                <View className="username">{item.user.nickname}</View>
                <View className="crated_at">2019-08-30 21:02:45</View>
              </View>
            </View>
            {item.type == "video" && (
              <View className="video">
                <Image src={item.videoSrc} />
                <Image
                  className="play"
                  src="https://img.alicdn.com/imgextra/i4/95607876/O1CN01weiRE7283FvulOD4l_!!95607876.png"
                />
              </View>
            )}
            {item.type == "graphic" && (
              <View className="graphic">
                <Image src={item.imgSrc} />
              </View>
            )}
            {item.type == "text" && (
              <View className="text">{item.content}</View>
            )}
            <View className="list_icon flex flex__justify--center flex__align-content--center">
              <View className="icon flex flex__justify--center flex__align-content--center">
                <Image src={like} />
                <View className="text">{item.view_number}</View>
              </View>
              <View className="icon flex flex__justify--center flex__align-content--center">
                <Image src={tread} />
                <View className="text">11</View>
              </View>
              <View className="play-icon">
                <Image src="assets/images/like.png" />
                {item.view_numer}
              </View>
              <View className="comment_icon">{item.comment_number}</View>
              <Button className="share"></Button>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
