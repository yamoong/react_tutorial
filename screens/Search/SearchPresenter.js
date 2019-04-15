import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BG_COLOR } from "../../constants/Colors";

const Container = styled.View`
    flex: 1;
    background-color:${BG_COLOR};
`;

const Input = styled.TextInput``;

const SearchPresenter = ({
    loading,
    tvResults,
    movieResults,
    searchTerm,
    handleSearchUpdate
}) => (
    <Container>
        <Input onChangeText={handleSearchUpdate}
                value = {searchTerm}
                autofocus
                returnKeyType={"go"}>

        </Input>

    </Container>
);


SearchPresenter.PropTypes = {
    loading: PropTypes.bool.isRequired,
    tvResults: PropTypes.array,
    movieResults: PropTypes.array,
    searchTerm:PropTypes.string,
    handleSearchUpdate: PropTypes.func.isRequired
};

export default SearchPresenter;