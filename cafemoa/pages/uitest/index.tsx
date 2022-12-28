import styled from "@emotion/styled";
import Box01 from "../../src/components/common/box/01";
import Text from "../../src/components/common/text/01";
import Tag from "../../src/components/common/text/02";

export default function UiTest() {
  return (
    <>
      <div>
        <Text size="54" weight="700">
          typography
        </Text>
        <br />
        <br />
        <div>
          <Text size="32" weight="300">
            fontWeight 300
          </Text>
        </div>
        <div>
          <Text size="16" weight="300">
            16px
          </Text>
          <Text size="18" weight="300">
            18px
          </Text>
          <Text size="20" weight="300">
            20px
          </Text>
          <Text size="24" weight="300">
            24px
          </Text>
          <Text size="28" weight="300">
            28px
          </Text>
          <Text size="32" weight="300">
            32px
          </Text>
          <Text size="36" weight="300">
            36px
          </Text>
          <Text size="42" weight="300">
            42px
          </Text>
          <Text size="54" weight="300">
            54px
          </Text>
          <Text size="72" weight="300">
            72px
          </Text>
          <Text size="80" weight="300">
            80px
          </Text>
        </div>
        <div>
          <Text size="32" weight="500">
            fontWeight 500
          </Text>
        </div>
        <div>
          <Text size="16" weight="500">
            16px
          </Text>
          <Text size="18" weight="500">
            18px
          </Text>
          <Text size="20" weight="500">
            20px
          </Text>
          <Text size="24" weight="500">
            24px
          </Text>
          <Text size="28" weight="500">
            28px
          </Text>
          <Text size="32" weight="500">
            32px
          </Text>
          <Text size="36" weight="500">
            36px
          </Text>
          <Text size="42" weight="500">
            42px
          </Text>
          <Text size="54" weight="500">
            54px
          </Text>
          <Text size="72" weight="500">
            72px
          </Text>
          <Text size="80" weight="500">
            80px
          </Text>
        </div>
        <div>
          <Text size="32" weight="700">
            fontWeight 700
          </Text>
        </div>
        <div>
          <Text size="16" weight="700">
            16px
          </Text>
          <Text size="18" weight="700">
            18px
          </Text>
          <Text size="20" weight="700">
            20px
          </Text>
          <Text size="24" weight="700">
            24px
          </Text>
          <Text size="28" weight="700">
            28px
          </Text>
          <Text size="32" weight="700">
            32px
          </Text>
          <Text size="36" weight="700">
            36px
          </Text>
          <Text size="42" weight="700">
            42px
          </Text>
          <Text size="54" weight="700">
            54px
          </Text>
          <Text size="72" weight="700">
            72px
          </Text>
          <Text size="80" weight="700">
            80px
          </Text>
        </div>
      </div>
      <div>
        <Text size="54" weight="700">
          Tag
        </Text>
        <br />
        <br />
        <div>
          <Tag size="sm">태그</Tag>
          <Tag size="md">태그</Tag>
          <Tag size="lg">태그</Tag>
        </div>
      </div>
      <div>
        <div>
          <Box01 styles={{ padding: "20px 0px" }}>
            <div>sssasdasd</div>
          </Box01>
        </div>
        <div>
          <Box01 styles={{ padding: "50px 20px" }}>
            <div>sssasdasd</div>
          </Box01>
        </div>
        <div>
          <Box01>
            <div>sssasdasd</div>
          </Box01>
        </div>
        <UL>
          <LI>
            <Box01>
              <div>sssasdasd</div>
            </Box01>
          </LI>
          <LI>
            <Box01>
              <div>sssasdasd</div>
            </Box01>
          </LI>
          <LI>
            <Box01>
              <div>sssasdasd</div>
            </Box01>
          </LI>
        </UL>
      </div>
    </>
  );
}

const UL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 -8px;
`;
const LI = styled.li`
  display: block;
  width: 50%;
  padding: 0 8px;
`;
