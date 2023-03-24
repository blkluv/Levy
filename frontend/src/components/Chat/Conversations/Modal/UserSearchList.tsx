import { Avatar, Button, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { SearchedUser } from "../../../../util/types";

interface UserSearchListProps {
  users: Array<SearchedUser>;
  addParticipant: (user: SearchedUser) => void;
  participants: Array<SearchedUser>;
}

const UserSearchList: React.FC<UserSearchListProps> = ({
  users,
  addParticipant,
  participants,
}) => {
  return (
    <>
      {users.length === 0 ? (
        <Flex mt={6} justify="center">
          <Text>No users found</Text>
        </Flex>
      ) : (
        <Stack mt={6}>
          {users.map((user) => (
            <Stack
              key={user.id}
              direction="row"
              align="center"
              spacing={4}
              py={2}
              px={4}
              borderRadius={4}
              _hover={{ bg: "whiteAlpha.200" }}
            >
              <div className="rounded">
                <Image className="rounded" src={user.image} width={50} height={50} alt="profile" />
              </div>
              <Flex justify="space-between" align="center" width="100%">
                <Text color="whiteAlpha.700">{user.username}</Text>
                <Button
                  bg="brand.100"
                  _hover={{ bg: "brand.100" }}
                  disabled={participants?.includes(user)}
                  onClick={() => addParticipant(user)}
                >
                  Select
                </Button>
              </Flex>
            </Stack>
          ))}
        </Stack>
      )}
    </>
  );
};
export default UserSearchList;
