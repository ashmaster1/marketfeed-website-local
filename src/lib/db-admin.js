import { firestore } from "./firebase-admin";

// To maintain reference to last doc while paginating the queries
let lastDocRef;

export async function getGlobalCommunityMeta() {
  try {
    const doc = await firestore.collection("global").doc("communityMeta").get();

    const globalCommunityMeta = { ...doc.data() };

    return { ...globalCommunityMeta };
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getMinimumCapitalForCommunities(communityIdList) {
  try {
    const communityMinimumCapitalObject = {};
    for (let i = 0; i < communityIdList.length; i++) {
      const communityId = communityIdList[i];
      const doc = await firestore
        .collection("communities")
        .doc(communityId)
        .get();
      const minimumCapital = doc.data().tradeSetup.capital;
      communityMinimumCapitalObject[communityId] = {
        communityId,
        minimumCapital,
      };
    }
    return communityMinimumCapitalObject;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getLatestWorkshopEventMeta() {
  try {
    let workshopEventMeta;

    const querySnapshot = await firestore
      .collection("workshopEvents")
      .orderBy("createdAt", "desc")
      .limit(1)
      .get();

    querySnapshot.forEach((doc) => {
      workshopEventMeta = doc.data();
    });

    return workshopEventMeta;
  } catch (error) {
    console.log("Error", error);
  }
}
