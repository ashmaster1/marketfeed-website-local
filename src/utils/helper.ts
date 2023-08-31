import { CommunityPerformanceMeta } from '@/models/communityPerformanceMeta';

export const getCommunityPerformanceListById = (
  globalCommunityMeta: any,
  communityIdList: string[],
  communityMinimumCapitalObject: any
): CommunityPerformanceMeta[] => {
  const communityPerformanceMetaList: CommunityPerformanceMeta[] =
    communityIdList
      .map((communityId: string): CommunityPerformanceMeta | undefined => {
        if (globalCommunityMeta.hasOwnProperty(communityId)) {
          const last30DaysPnlPercentage =
            globalCommunityMeta[communityId]?.last30DaysPnlPercentage;
          // const name = globalCommunityMeta[communityId]?.name;
          const startDate = new Date(
            globalCommunityMeta[communityId]?.startDate._seconds * 1000
          ).toISOString();
          const totalPnlPercentage =
            globalCommunityMeta[communityId]?.totalPnlPercentage;
          // const tradeExecution =
          //   globalCommunityMeta[communityId]?.tradeExecution;
          const yearlyTargetPercentage =
            globalCommunityMeta[communityId]?.yearlyTargetPercentage;
          const minimumCapital =
            communityMinimumCapitalObject[communityId]?.minimumCapital || 0;
          const CommunityPerformanceMetaData: CommunityPerformanceMeta = {
            last30DaysPnlPercentage,
            // name,
            startDate,
            totalPnlPercentage,
            // tradeExecution,
            yearlyTargetPercentage,
            minimumCapital,
          };
          return CommunityPerformanceMetaData;
        }
      })
      .filter(Boolean) as CommunityPerformanceMeta[];

  return communityPerformanceMetaList;
};
