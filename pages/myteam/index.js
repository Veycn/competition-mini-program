// pages/myteam/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLeader: false,
    teamer: [
      // { name: '杨小平', phone: '17784450729', qq: '1594325241', avatar: '/img/avatar.jpg', id: '12345678' },
      // { name: '杨玄烛', phone: '15632839231', qq: '63378239', avatar: '/img/avatar.jpeg', id: '45678658' },
      // { name: '刘凯', phone: '17399038231', qq: '789423894', avatar: '/img/avatar.jpg', id: '78905756' },
      // { name: '冉凯', phone: '18878369823', qq: '239894042', avatar: '/img/avatar.jpeg', id: '56453456' },
    ],
    myTeams: []
  },

  // 让队长显示在第一个
  _formatData(){
    const {teamer, isLeader, userid} = this.data
    let temp = null
    if(isLeader && teamer.length){
      teamer.forEach((item, index) => {
        if(item.id == id){
          temp = teamer.splice(index, 1)
        }
      })
      teamer.unshift(temp[0])
      this.setData({teamer})
    }
  },

  // 去发布招募信息
  toRecruit(e){
    wx.switchTab({
      url: '/pages/message/index'
    })
  },

  // 查看申请加入队伍的列表
  applyList(e){
    wx.navigateTo({url: `/pages/applylist/index?teamid=${this.data.teamid}`})
  },
  // 点击了队员list右边的按钮， 应该是想进行某些操作
  doSomething(e){
    const {userid} = this.data
    const tag = e.currentTarget.dataset.tag
    const curId = e.currentTarget.dataset.id
    const index = e.currentTarget.dataset.index
    if(tag == 'captain'){
      // 相等 =>  退出队伍
      // 不相等 => 踢人
      // userid == curId ? this._exitTeam() : this._dropOut(index)
    } else if(tag == 'member'){
      userid == curId ? this._exitTeam() : this._showInfo(index)
    }
  },
  showInfo(e){
    const index = e.currentTarget.dataset.index
    this._showInfo(index)
  },
  // 退出队伍
  _exitTeam(){
    console.log("当前用户退出队伍")
  },

  // 踢人
  _dropOut(i){
    const {teamer} = this.data
    console.log("踢人")
    console.log("！！！ 将踢出" + teamer[i].name)
  },
  _showInfo(i){
    const {teamer} = this.data
    console.log("查看成员信息" + teamer[i].name)
    wx.navigateTo({url: `/pages/memberinfo/index?memberid=${teamer[i].id}`})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let teamid = options.teamid
    let leader = options.leader
    // this._formatData()
    this.getNewTeamMembers(teamid)
    console.log(options) 
    this.setData({
      teamid,
      leader,
      isLeader: options.isLeader,
      teamname: options.teamname,
      userid: options.userid
    })
    wx.getStorage({
      key: 'myTeams',
      success: res => {
        console.log(res)
        let myTeams = res.data
        for(let i = 0; i < myTeams.length; i++){
          if(myTeams[i].id == teamid){
            let members = myTeams[i].members
            this.setData({members})
            this.getMembers(members)
          }
        }
        this.setData({myTeams})
      }
    })
    wx.request({
      url: 'http://localhost:9009/user/getuserbaseinfo',
      data: {id: leader},
      success: res => {
        console.log(res)
        if(res.statusCode == 200){
          this.setData({
            leaderInfo: res.data.data
          })
        }
      }
    })
  },
  getNewTeamMembers(teamid){
    wx.request({
      url: 'http://localhost:9009/team/queryteambyid',
      data: {id: teamid},
      success: res => {
        console.log(res.data.data[0])
        let {members} = res.data.data[0]
        console.log(members)
        this.getMembers(members)
      }
    })
  },
  // 获取成员数据
  getMembers(members){
    if(members == null){

    }else{
      //members = members.split(',')
      console.log(members)
      wx.request({
        url: 'http://localhost:9009/msg/getmembersinfo',
        data: {members},
        success: res => {
          console.log(res)
          this.setData({teamer: res.data.data})
        }
      })
    }
  }
})