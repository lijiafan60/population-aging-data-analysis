<template>
  <div class="body-box">
    <dv-border-box7>
      <div class="content-box">
        <div class="policy-item" v-for="item in policy" :key="item.key">
          <a :href="item.link" class="colorText">{{ item.title }}</a>
          <span>{{ item.data }}</span>
        </div>
      </div>
    </dv-border-box7>
  </div>
</template>

<script>
export default {
  name: "policy_page",
  data() {
    return {
      policy: [
        {
          key: 1,
          title: "人力资源社会保障部 教育部 国务院扶贫办关于进一步加强贫困家庭高校毕业生就业帮扶工作的通知",
          link: "http://www.mohrss.gov.cn/SYrlzyhshbzb/jiuye/zcwj/202008/t20200805_381989.html",
          data: "2022/10/1"
        },
        {
          key: 2,
          title: "人力资源社会保障部 财政部 国务院扶贫办关于进一步做好就业扶贫工作的通知",
          link: "http://www.mohrss.gov.cn/SYrlzyhshbzb/jiuye/zcwj/202006/t20200622_377236.html",
          data: "2021/10/2"
        },
        {
          key: 3,
          title: "人力资源社会保障部关于举办2020年“三区三州”职业技能大赛的通知",
          link: "http://www.mohrss.gov.cn/SYrlzyhshbzb/jiuye/zcwj/202006/t20200622_377236.html",
          data: "2021/10/2"
        },
        {
          key: 4,
          title: "人力资源社会保障部办公厅关于做好疫情防控常态化条件下技能扶贫工作的通知",
          link: "http://www.mohrss.gov.cn/SYrlzyhshbzb/jiuye/zcwj/202006/t20200622_377236.html",
          data: "2021/10/2"
        },
        {
          key: 5,
          title: "人力资源社会保障部 财政部 农业农村部关于进一步推动返乡入乡创业工作的意见",
          link: "http://www.mohrss.gov.cn/SYrlzyhshbzb/jiuye/zcwj/202006/t20200622_377236.html",
          data: "2020/11/20"
        },
        {
          key: 6,
          title: "人力资源社会保障部 国家发展改革委 财政部 国务院扶贫办关于做好易地扶贫搬迁就业帮扶工作的通知",
          link: "http://www.mohrss.gov.cn/SYrlzyhshbzb/jiuye/zcwj/202006/t20200622_377236.html",
          data: "2019/5/10"
        },
        {
          key: 7,
          title: "人力资源社会保障部 财政部 国务院扶贫办关于进一步做好就业扶贫工作的通知",
          link: "http://www.mohrss.gov.cn/SYrlzyhshbzb/jiuye/zcwj/202006/t20200622_377236.html",
          data: "2021/10/2"
        },
        {
          key: 8,
          title: "人力资源社会保障部办公厅关于进一步开展人力资源服务机构助力脱贫攻坚行动的通知",
          link: "http://www.mohrss.gov.cn/SYrlzyhshbzb/jiuye/zcwj/202006/t20200622_377236.html",
          data: "2021/10/2"
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.body-box {
  height: 930px;
  margin-top: 16px;
  display: flex;
  flex-direction: row;

  .content-box {
    height: 900px;
    width: 1200px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;

    .policy-item {
      height: 50px;
      display: grid;
      grid-template-columns: 7fr 2fr;
    }
  }
}
</style>
