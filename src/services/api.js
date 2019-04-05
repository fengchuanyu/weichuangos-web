import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params = {}) {
  return request(`/api/rule?${stringify(params.query)}`, {
    method: 'POST',
    body: {
      ...params.body,
      method: 'update',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile(id) {
  return request(`/api/profile/basic?id=${id}`);
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function removeFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'delete',
    },
  });
}

export async function addFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'post',
    },
  });
}

export async function updateFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'update',
    },
  });
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices(params = {}) {
  return request(`/api/notices?${stringify(params)}`);
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/captcha?mobile=${mobile}`);
}





export async function submitProject(str) {   //str为参数
  return request('/api/submitProject',{      //接口地址
    method: 'POST',
    body: str,
  });
}


export async function queryUnderway() {   //请求进行中仓库
  return request(`/api/underway`);
}

export async function getProjectTeam(str) {   //str为参数
  return request('/api/getProjectTeam',{      //接口地址
    method: 'POST',
    body: str,
  });
}

export async function getProjectList(str) {   // 请求 进行中/仓库
  return request('/api/getProjectList',{ //接口地址
    method: 'POST',
    body: str,  // 参数
  });
}

export async function postDelProjectList(str) {   // 删除list列表的内容
  return request('/api/postDelProjectList',{ //接口地址
    method: 'POST',
    body: str,  // 参数
  });
}
export async function postDelProjectStorage(str) {   // 删除storage列表里的内容
  return request('/api/postDelProjectStorage',{ //接口地址
    method: 'POST',
    body: str,  // 参数
  });
}
export async function postCommit(str) {   // 删除storage列表里的内容
  return request('/api/postCommit',{ //接口地址
    method: 'POST',
    body: str,  // 参数
  });
}

export async function getReviseInfo(str) {   //str为参数
  return request('/api/getReviseInfo',{      //接口地址
    method: 'POST',
    body: str,
  });
}
