'use client';

import { Lock, LockOpen, ZoomIn, ZoomOut, Close, AspectRatio } from '@mui/icons-material';
import { Button, IconButton, Slider } from '@mui/material';
import SenhaModal from './SenhaModal';
import { Documento } from '../type/documentos';
import { useDocumentStore } from '../store/documentStore';
import { useEffect, useState } from 'react';

// Ícones personalizados para Width e Height
const WidthIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 17h18v2H3zm0-12h18v2H3zm8 4h10v2H11zm0 4h10v2H11zM7 7h2v10H7z"/>
  </svg>
);

const HeightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 7h-2v10h2zm4-4h-2v18h2zM9 3H7v18h2z"/>
  </svg>
);

export default function DocumentoCard({ id, nome, imagem, senhaCorreta }: Documento) {
  const { unlockDocument, isDocumentUnlocked } = useDocumentStore();
  const [openModal, setOpenModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [zoomModalOpen, setZoomModalOpen] = useState(false);
  const [zoomX, setZoomX] = useState(1);
  const [zoomY, setZoomY] = useState(1);
  const [lockAspectRatio, setLockAspectRatio] = useState(true);
  const isUnlocked = isDocumentUnlocked(id);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAbrirDocumento = () => {
    isUnlocked ? setOpenModal(false) : setOpenModal(true);
  };

  const handleValidacaoSucesso = () => {
    unlockDocument(id);
    setOpenModal(false);
  };

  const handleImageClick = () => {
    if (isUnlocked) {
      setZoomModalOpen(true);
    }
  };

  const handleZoomIn = (axis: 'x' | 'y') => {
    if (axis === 'x') {
      setZoomX(prev => Math.min(prev + 0.25, 3));
      if (lockAspectRatio) setZoomY(prev => Math.min(prev + 0.25, 3));
    } else {
      setZoomY(prev => Math.min(prev + 0.25, 3));
      if (lockAspectRatio) setZoomX(prev => Math.min(prev + 0.25, 3));
    }
  };

  const handleZoomOut = (axis: 'x' | 'y') => {
    if (axis === 'x') {
      setZoomX(prev => Math.max(prev - 0.25, 0.5));
      if (lockAspectRatio) setZoomY(prev => Math.max(prev - 0.25, 0.5));
    } else {
      setZoomY(prev => Math.max(prev - 0.25, 0.5));
      if (lockAspectRatio) setZoomX(prev => Math.max(prev - 0.25, 0.5));
    }
  };

  const handleResetZoom = () => {
    setZoomX(1);
    setZoomY(1);
  };

  const closeZoomModal = () => {
    setZoomModalOpen(false);
    handleResetZoom();
  };

  const handleSliderChange = (axis: 'x' | 'y') => (event: Event, newValue: number | number[]) => {
    const value = Array.isArray(newValue) ? newValue[0] : newValue;
    if (axis === 'x') {
      setZoomX(value);
      if (lockAspectRatio) setZoomY(value);
    } else {
      setZoomY(value);
      if (lockAspectRatio) setZoomX(value);
    }
  };

  // Renderizar conteúdo apenas no cliente
  if (!isMounted) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 h-64">
        {/* Placeholder enquanto carrega */}
        <div className="w-full h-48 dark:bg-pink-200 animate-pulse rounded-lg"></div>
      </div>
    );
  }

  return (
    <div className="dark:bg-pink-600 rounded-lg shadow-md overflow-hidden mb-4">
      <div className="p-4">
        <div className="relative">
          {isUnlocked ? (
            <div 
              className="cursor-pointer"
              onClick={handleImageClick}
            >
              <img 
                src={imagem} 
                alt={nome} 
                className="w-full h-48 object-contain rounded-lg hover:opacity-90 transition-opacity"
                style={{ touchAction: 'manipulation' }}
                loading="lazy"
              />
            </div>
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg filter blur-md">
              <Lock className="text-gray-500 text-4xl" />
            </div>
          )}
        </div>
        
        <div className="mt-3">
          <h3 className={`font-medium ${isUnlocked ? 'text-white' : 'text-gray-500 blur-sm'}`}>
            {nome}
          </h3>
        </div>
        
        <Button
          variant="contained"
          fullWidth
          className="mt-3 bg-pink-500 hover:bg-pink-600 text-white"
          startIcon={isUnlocked ? <LockOpen /> : <Lock />}
          onClick={handleAbrirDocumento}
        >
          {isUnlocked ? 'Aberto' : 'Abrir'}
        </Button>
      </div>

      {/* Modal de Senha */}
      <SenhaModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSuccess={handleValidacaoSucesso}
        senhaCorreta={senhaCorreta}
      />

      {/* Modal de Zoom */}
      {zoomModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center p-4">
          <div className="absolute top-4 right-4 flex gap-2">
            <IconButton 
              onClick={() => setLockAspectRatio(!lockAspectRatio)}
              className="text-pink-500 hover:bg-pink-500/20"
              title={lockAspectRatio ? "Destravar proporção" : "Travar proporção"}
            >
              <AspectRatio className={lockAspectRatio ? "text-pink-400" : "text-white"} />
            </IconButton>
            <IconButton 
              onClick={closeZoomModal}
              className="text-white hover:bg-pink-500/20"
            >
              <Close className="text-white" />
            </IconButton>
          </div>
          
          <div 
            className="flex-1 flex items-center justify-center w-full overflow-auto cursor-pointer"
            onClick={closeZoomModal}
          >
            <img
              src={imagem}
              alt={nome}
              className="max-w-full max-h-full transition-transform duration-300"
              style={{
                transform: `scale(${zoomX}, ${zoomY})`,
                cursor: (zoomX > 1 || zoomY > 1) ? 'grab' : 'pointer',
              }}
              onDoubleClick={(e) => {
                e.stopPropagation();
                handleResetZoom();
              }}
            />
          </div>
          
          <div 
            className="w-full max-w-md bg-black bg-opacity-50 rounded-lg mt-4 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-pink-500">
                <WidthIcon />
              </div>
              <Slider
                value={zoomX}
                onChange={handleSliderChange('x')}
                min={0.5}
                max={3}
                step={0.1}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `${Math.round(value * 100)}%`}
                sx={{
                  color: '#ec4899',
                  '& .MuiSlider-thumb': {
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: '0px 0px 0px 8px rgba(236, 72, 153, 0.16)',
                    },
                  },
                }}
              />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-pink-500">
                <HeightIcon />
              </div>
              <Slider
                value={zoomY}
                onChange={handleSliderChange('y')}
                min={0.5}
                max={3}
                step={0.1}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `${Math.round(value * 100)}%`}
                sx={{
                  color: '#ec4899',
                  '& .MuiSlider-thumb': {
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: '0px 0px 0px 8px rgba(236, 72, 153, 0.16)',
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}