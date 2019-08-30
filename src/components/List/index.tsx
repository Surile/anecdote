import Taro, { Component } from "@tarojs/taro";
import { View, Video, Image } from "@tarojs/components";

interface PropsState {
  type: String;
  objAry: Array<any>;
}

export default class List extends Component<PropsState> {
  render() {
    const { objAry } = this.props;
    return (
      <View className="container">
        {objAry.map(item => (
          <View key={item.id} className="">
            {item.type == "video" && (
              <View className="video">
                <Video src={item.video} />
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
            <View className="icon">
              <View className="like">
                <Image src="" />
                {item.like}
              </View>
            </View>
            <View className="author">
              <View className="avatar">{item.avatar}</View>
              <View className="more">更多</View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
