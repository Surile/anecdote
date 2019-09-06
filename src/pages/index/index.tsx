import { ComponentType } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { List } from "../../components";
import { AtTabs, AtTabsPane } from "taro-ui";
import "./index.scss";

interface PageState {
  current: number;
}

class Index extends Component<PageState> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "首页"
  };

  state = {
    current: 0,
    list: [
      {
        id: 1,
        type: "video",
        videoSrc:
          "https://mmbiz.qpic.cn/mmbiz_gif/kUlnnAfBltIp0uibju80ibvg9aOQgpc3SGuIlHFW5OOuk6hZjB2ztMAwDhBP3bia8poeHPamI3twGQ0ZI1Q1f6Mfg/640?wx_fmt=gif",
        user: {
          avatar:
            "http://thirdwx.qlogo.cn/mmopen/PiajxSqBRaELRCAuvsJhor4iaR8iaU7EfdibY6conib5B1xtze9PRnDOf3jxPBiaklCsR9pVx1TBTgd3R1umElDZ54vvBObBU3osQ1mFM4HbEhoGA/132",
          id: 156,
          nickname: "山的那边"
        },
        view_number: 22543,
        comment_number: 10
      },
      {
        id: 2,
        type: "graphic",
        imgSrc: "http://mpic.spriteapp.cn/ugc/2019/08/30/5d68689f2126d.gif",
        user: {
          avatar:
            "http://thirdwx.qlogo.cn/mmopen/PiajxSqBRaELRCAuvsJhor4iaR8iaU7EfdibY6conib5B1xtze9PRnDOf3jxPBiaklCsR9pVx1TBTgd3R1umElDZ54vvBObBU3osQ1mFM4HbEhoGA/132",
          id: 156,
          nickname: "山的那边"
        },
        view_number: 22543,
        comment_number: 10
      },
      {
        id: 3,
        type: "text",
        content:
          "测试测试萨达是大所多撒大萨达阿斯顿撒打死打死打死安达市打死打死多奥术大师大叔大婶大叔大婶安达市奥术大师大萨达所大萨达撒大所大萨达所打撒所多阿萨德奥术大师打断阿达打死",
        user: {
          avatar:
            "http://thirdwx.qlogo.cn/mmopen/PiajxSqBRaELRCAuvsJhor4iaR8iaU7EfdibY6conib5B1xtze9PRnDOf3jxPBiaklCsR9pVx1TBTgd3R1umElDZ54vvBObBU3osQ1mFM4HbEhoGA/132",
          id: 156,
          nickname: "山的那边"
        },
        view_number: 22543,
        comment_number: 10
      }
    ]
  };

  componentWillMount() {}

  componentWillReact() {
    console.log("componentWillReact");
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleClick(current) {
    this.setState({
      current
    });
  }

  render() {
    const tabList = [{ title: "推荐" }, { title: "图文" }, { title: "段子" }];
    return (
      <View className="index">
        <AtTabs
          current={this.state.current}
          tabList={tabList}
          onClick={this.handleClick.bind(this)}
        >
          <AtTabsPane current={this.state.current} index={0}>
            <List objAry={this.state.list} />
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <List objAry={this.state.list} />
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <List objAry={this.state.list} />
          </AtTabsPane>
        </AtTabs>
      </View>
    );
  }
}

export default Index as ComponentType;
