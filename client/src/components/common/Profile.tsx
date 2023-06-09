import { Email, Phone, Place } from '@mui/icons-material';
import { Box, Stack, Typography } from '@pankod/refine-mui';

import { ProfileProps, PropertyProps } from 'interfaces/common';
import PropertyCard from './PropertyCard';

const checkImage = (url: any) => {
  const img = new Image();
  img.src = url;
  return img.width !== 0 && img.height !== 0;
};

const Profile = ({ type, name, avatar, email, properties }: ProfileProps) => (
  <Box>
    <Typography fontSize={25} fontWeight={700} color="#11142D">{type} Profile</Typography>

    <Box
      mt="20px"
      borderRadius="15px"
      padding="20px"
      bgcolor="#FCFCFC"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2.5,
        }}
      >
        <img
          src="https://img.freepik.com/premium-vector/real-estate-home-sale-facebook-cover-web-banner_138558-377.jpg"
          width={350}
          height={350}
          alt="coverimg"
          className="my_profile-bg"
        />

        <Box
          flex={1}
          sx={{ marginTop: { md: '58px' }, marginLeft: { xs: '20px', md: '0px' } }}
        >
          <Box flex={1} display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap="20px">
            <img
              src={checkImage(avatar) ? avatar : 'https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png'}
              width={100}
              height={100}
              alt="user_profile"
              className="my_profile_user-img"
            />

            <Box flex={1} display="flex" flexDirection="column" justifyContent="space-between" gap="30px">
              <Stack direction="column">
                <Typography fontSize={22} fontWeight={700} color="#11142D">{name}</Typography>
                <Typography fontSize={16} color="#808191">Real-Estate Agent Profile</Typography>
              </Stack>

              <Stack direction="column" gap="30px">
                <Stack gap="15px">
                  <Typography fontSize={14} fontWeight={500} color="#808191">Address</Typography>
                  <Box display="flex" flexDirection="row" alignItems="center" gap="10px">
                    <Place sx={{ color: '#11142D' }} />
                    <Typography fontSize={14} color="#11142D">13th Street. 47 W 13th St, New York, NY 10011, USA</Typography>
                  </Box>
                </Stack>

                <Stack direction="row" flexWrap="wrap" gap="20px" pb={4}>
                  <Stack flex={1} gap="15px">
                    <Typography fontSize={14} fontWeight={500} color="#808191">Phone Number</Typography>
                    <Box display="flex" flexDirection="row" alignItems="center" gap="10px">
                      <Phone sx={{ color: '#11142D' }} />
                      <Typography fontSize={14} color="#11142D" noWrap>+9156768904</Typography>
                    </Box>
                  </Stack>

                  <Stack flex={1} gap="15px">
                    <Typography fontSize={14} fontWeight={500} color="#808191">Email Address</Typography>
                    <Box display="flex" flexDirection="row" alignItems="center" gap="10px">
                      <Email sx={{ color: '#11142D' }} />
                      <Typography fontSize={14} color="#11142D">{email}</Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>

    {properties.length > 0 && (
    <Box
      mt={2.5}
      borderRadius="15px"
      padding="20px"
      bgcolor="#FCFCFC"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142D">{type} Properties</Typography>

      <Box
        mt={2.5}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2.5,
        }}
      >
        {properties?.map((property: PropertyProps) => (
          <PropertyCard key={property._id} id={property._id}
            title={property.title}
            description={property.description}
            location={property.location}
            price={property.price}
            photo={property.photo}
          />
        ))}
      </Box>
    </Box>
    )}
  </Box>
);

export default Profile;
