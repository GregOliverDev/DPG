'use client';

import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

interface SenhaModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  senhaCorreta: string;
}

export default function SenhaModal({ open, onClose, onSuccess, senhaCorreta }: SenhaModalProps) {
  const [senha, setSenha] = useState('');
  const [erroSenha, setErroSenha] = useState(false);

  const validarSenha = () => {
    if (senha === senhaCorreta) {
      onSuccess(); // Agora chama o unlockDocument via store
      setErroSenha(false);
    } else {
      setErroSenha(true);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Digite a senha</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Senha"
          type="password"
          fullWidth
          variant="standard"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          error={erroSenha}
          helperText={erroSenha ? "Senha incorreta. Tente novamente." : ""}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={validarSenha}>Confirmar</Button>
      </DialogActions>
    </Dialog>
  );
}