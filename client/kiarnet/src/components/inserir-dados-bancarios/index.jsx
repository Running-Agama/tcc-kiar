import React, { useState } from 'react';
import './index.scss'

const bancos = ['Banco A', 'Banco B', 'Banco C', 'Banco D', 'Banco E', 'Banco F'];
const tiposDeConta = ['Jurídica', 'Física', 'Pessoal'];

const BancoConta = () => {
  const [step, setStep] = useState(1);
  const [selectedBanco, setSelectedBanco] = useState('');
  const [selectedTipo, setSelectedTipo] = useState('');
  const [codigoAgencia, setCodigoAgencia] = useState('');
  const [codigoBanco, setCodigoBanco] = useState('');

  const handleBancoSelect = (banco) => {
    setSelectedBanco(banco);
    setStep(2);
  };

  const handleTipoSelect = (tipo) => {
    setSelectedTipo(tipo);
    setStep(3);
  };

  const handleSubmit = () => {
    alert(`Banco: ${selectedBanco}, Tipo: ${selectedTipo}, Agência: ${codigoAgencia}, Código do Banco: ${codigoBanco}`);
  };

  return (
    <div className='menu'>
      {step === 1 && (
        <div className='passo-1'>
          <h2>Selecione um Banco</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {bancos.map((banco) => (
              <button key={banco} onClick={() => handleBancoSelect(banco)} style={{ margin: '10px' }}>
                {banco}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className='passo-2'>
          <h2>Selecione o Tipo de Conta</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {tiposDeConta.map((tipo) => (
              <button key={tipo} onClick={() => handleTipoSelect(tipo)} style={{ margin: '10px' }}>
                {tipo}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className='passo-3'>
          <h2>Digite o Código da Agência</h2>
          <input
            type="text"
            value={codigoAgencia}
            onChange={(e) => setCodigoAgencia(e.target.value)}
            placeholder="Código da Agência"
          />
          <br />
          <h2>Digite o Código do Banco (9 dígitos)</h2>
          <input
            type="text"
            value={codigoBanco}
            onChange={(e) => setCodigoBanco(e.target.value)}
            placeholder="Código do Banco"
            maxLength={9}
          />
          <br />
          <button onClick={handleSubmit}>Enviar</button>
        </div>
      )}
    </div>
  );
};

export default BancoConta;
