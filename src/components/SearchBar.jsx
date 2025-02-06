import { Stack, } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState, } from 'react';
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const navigate = useNavigate()
  const [search, setsearch] = useState()
  function handleSubmit(e) {
    e.preventdefault

    if (search) {
      navigate(`/search/${search}`)
      setsearch('')
    }
  }
  return (
    <Stack sx={{ justifyContent: 'space-between', height: '35px' }} direction="row" >
      <input type="text" onChange={(e) => setsearch(e.target.value)} value={search} style={{ border: 'none', borderBottomLeftRadius: '10px', borderTopLeftRadius: '10px', padding: '0 10px' }} >
      </input>
      <button type='submit' onClick={handleSubmit} style={{ borderBottomRightRadius: '10px', borderTopRightRadius: '10px', padding: '0 10px', border: 'none', cursor: 'poin' }} ><SearchIcon p={0} sx={{}} /></button>
    </Stack>
  )
}

export default SearchBar
