export const add_todo = (addPlans: string) => {
  if (localStorage.myplans === undefined || localStorage.myplans === null) {
    localStorage.setItem("myplans", JSON.stringify([]));
    console.log("localstorage에 myplans가 없어서 빈 배열을 넣어줬습니다.");
  } // localstorage에 myplans가 없으면 빈 배열을 넣어준다.
  const previousPlans = JSON.parse(localStorage.myplans);
  localStorage.setItem("myplans", JSON.stringify([addPlans, ...previousPlans]));
};

export const get_todo = (searchPlans: string) => {
  const currentPlans = JSON.parse(localStorage.myplans);
  return currentPlans.filter((plans: any) => plans.includes(searchPlans));
};

export const delete_todos = (deletePlans: string) => {
  const currentPlans = JSON.parse(localStorage.myplans);
  const newPlans = currentPlans.filter((plans: any) => plans !== deletePlans);
  localStorage.setItem("myplans", JSON.stringify(newPlans));
  return newPlans;
};
