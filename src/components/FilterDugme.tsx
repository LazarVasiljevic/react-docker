import React from 'react'
import { useState,  } from 'react';
import { LuListFilter } from "react-icons/lu";
import '../styles/FilterDugme.css';

interface FilterDugmeProps {
    onFilterChange: (
        mesto: string,
        tezina: string,
        tip: string
    ) => void;

    samoMesto?: boolean;
}

function FilterDugme({ onFilterChange, samoMesto = false }: FilterDugmeProps) {

    const [open, setOpen] = useState(false);


    const [mesto, setMesto] = useState("sve");
    const [tezina, setTezina] = useState("sve");
    const [tip, setTip] = useState("sve");
    
    const primeniFiltere = () => {
        onFilterChange(mesto, tezina, tip);
        setOpen(false);
    };

    const obrisiFiltere = () => {
        setMesto("sve");
        setTezina("sve");
        setTip("sve");
        onFilterChange("sve", "sve", "sve");
        setOpen(false);
    };

    return (
        <div className="filter">

            <button className="filter-button"  onClick={() => setOpen(!open)}>
                <LuListFilter className="filter-icon"/>
            </button>

            {open && (
               <> 
               <div className="filter-overlay" onClick={() => setOpen(false)}/>
                <div className="filter-panel">

                    <div className="filter-option">
                        <label htmlFor="mesto">
                            Mesto
                        </label>

                        <select
                            id="mesto"
                            value={mesto}
                            onChange={(e) => setMesto(e.target.value)}
                        >
                            <option value="sve">
                                Sva mesta
                            </option>

                            <option value="Beljanica">
                                Beljanica
                            </option>

                            <option value="Tara">
                                Tara
                            </option>

                            <option value="Jastrebac">
                                Jastrebac
                            </option>

                            <option value="Stara planina">
                                Stara planina
                            </option>

                            <option value="Divčibare">
                                Divčibare
                            </option>

                            <option value="Valjevo">
                                Valjevo
                            </option>

                            <option value="Beograd">
                                Beograd
                            </option>

                            <option value="Goč">
                                Goč
                            </option>

                            <option value="Kopaonik">
                                Kopaonik
                            </option>

                            <option value="Fruška gora">
                                Fruška gora
                            </option>

                            <option value="Besna kobila">
                                Besna kobila
                            </option>
                            
                        </select>
                    </div>

                    {!samoMesto && (
                        <>
                            <div className="filter-option">
                                <label htmlFor="tip">
                                    Tip staze
                                </label>

                                <select
                                    id="tip"
                                    value={tip}
                                    onChange={(e) =>
                                        setTip(e.target.value)
                                    }
                                >
                                    <option value="sve">
                                        Svi tipovi
                                    </option>

                                    <option value="kruzna">
                                        Kružna
                                    </option>

                                    <option value="od tacke do tacke">
                                        Od tačke do tačke
                                    </option>
                                </select>
                            </div>

                            <div className="filter-option">
                                <label htmlFor="tezina">
                                    Težina
                                </label>

                                <select
                                    id="tezina"
                                    value={tezina}
                                    onChange={(e) =>
                                        setTezina(e.target.value)
                                    }
                                >
                                    <option value="sve">
                                        Sve težine
                                    </option>

                                    <option value="laka">
                                        Laka
                                    </option>

                                    <option value="srednje">
                                        Srednja
                                    </option>

                                    <option value="teška">
                                        Teška
                                    </option>
                                </select>
                            </div>
                        </>
                    )}
                    <div className="filter-actions">
                        <button
                            className="apply-filter-button"
                            onClick={primeniFiltere}
                        >
                            Primeni
                        </button>
                        <button
                                className="clear-filter-button"
                                onClick={obrisiFiltere}
                            >
                            Obriši filtere
                        </button>
                    </div>
                </div>
                </>
            )}

        </div>
    );
}


export default FilterDugme