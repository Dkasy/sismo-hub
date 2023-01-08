
import { dataProviders } from "@group-generators/helpers/data-providers";
import { Tags, ValueType, GroupWithData } from "topics/group";
import {
  GenerationContext,
  GenerationFrequency,
  GroupGenerator,
} from "topics/group-generator";

// Generated from factory.sismo.io

const generator: GroupGenerator = {
  
  generationFrequency: GenerationFrequency.Once,
  
  generate: async (context: GenerationContext): Promise<GroupWithData[]> => {
  
    const githubProvider = new dataProviders.GithubProvider();
    
    const githubProviderData0 = await githubProvider.getRepositoriesContributors({
      repositories: [ "https://github.com/Trawmoney/DGTLBRN/tree/main" ],
    });

    return [
      {
        name: "pet-bot",
        timestamp: context.timestamp,
        data: githubProviderData0,
        valueType: ValueType.Score,
        tags: [Tags.Factory],
      },
    ];
  },
};

export default generator;
