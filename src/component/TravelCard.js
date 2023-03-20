import React,{useState} from 'react';

import {  Card,Typography } from '@mui/material';
import { TextField, Button, Dialog, DialogTitle,IconButton, DialogContent, DialogActions } from '@material-ui/core';
import {  Edit as EditIcon } from '@material-ui/icons';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';


export default function StudyCard() {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const handleOpen = (index) => {
    if (typeof index === 'number') {
      setEditItem(index);
      setInputValue(items[index]);
    }
    setOpen(true);
  };

  const handleAddItem = () => {
    setItems([...items, inputValue]);
    setInputValue('');
    setOpen(false);
  };

  const handleEditItem = () => {
    const newItems = [...items];
    newItems[editItem] = inputValue;
    setItems(newItems);
    setInputValue('');
    setOpen(false);
    setEditItem(null);
  };
  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  

  const handleClose = () => {
    setInputValue('');
    setOpen(false);
    setEditItem(null);
  };
  return (
    <>
    <Card sx={{bgcolor: '	#F0F0F0'}}>
    <Typography variant="h5" sx={{fontWeight: 'bold'}} component="h3" textAlign='center'>
    Travels
  </Typography>
  <IconButton color="primary" variant="contained" onClick={() => handleOpen()} style={{ justifyContent: 'center'}}><AddBoxIcon/>
  </IconButton>
  {items.map((item, index) => (
    <div key={index}>
      <span>{item}</span>
      <IconButton  style={{  color: "green",float:'right',padding:0 }}><EditIcon onClick={() => handleOpen(index)}   /></IconButton>
        
      <IconButton   style={{  color: "red",float:'right',padding:0  }}><DeleteIcon onClick={() => handleDeleteItem(index)}/></IconButton>
    </div>
  ))}
  <Dialog  sx={{minWidth:300}} open={open} onClose={handleClose}>
    <DialogTitle>{editItem !== null ? 'Edit ' : 'Travels'}</DialogTitle>
    <DialogContent>
      <TextField autoFocus fullWidth label="Travels" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </DialogContent>
    <DialogActions sx={{ml:40}} spacing={5}>
      <Button onClick={handleClose} color="primary"  variant="contained">
        Cancel
      </Button>
      <Button variant="contained" onClick={editItem !== null ? handleEditItem : handleAddItem} color="primary">
        {editItem !== null ? 'Save' : 'Add'}
      </Button>
    </DialogActions>
  </Dialog>
    </Card>
    </>
  )
}
